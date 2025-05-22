import { useState, useEffect } from 'react';

export default function EntityForm({
  fields,
  onSubmit,
  initialData = {},
  buttonLabel = "Submit",
}) {
  const [formData, setFormData] = useState({});
  const [previews, setPreviews] = useState({});

  useEffect(() => {
    setFormData(initialData ?? {});
    setPreviews({});
  }, [initialData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (key, files, multiple) => {
    if (multiple) {
      const newFiles = Array.from(files);
      const currentFiles = formData[key] || [];
      const currentPreviews = previews[key] || [];

      // Combine and limit to 2 files
      const combinedFiles = [...currentFiles, ...newFiles].slice(0, 2);
      const combinedPreviews = [
        ...currentPreviews,
        ...newFiles.map((file) => ({
          file,
          url: URL.createObjectURL(file),
        })),
      ].slice(0, 2);

      handleChange(key, combinedFiles);
      setPreviews((prev) => ({ ...prev, [key]: combinedPreviews }));
    } else {
      const file = files[0];
      handleChange(key, file);
      setPreviews((prev) => ({ ...prev, [key]: file ? URL.createObjectURL(file) : null }));
    }
  };

  const handleRemoveImage = (key, index) => {
    const updatedPreviews = previews[key].filter((_, i) => i !== index);
    const updatedFiles = (formData[key] || []).filter((_, i) => i !== index);
    setPreviews((prev) => ({ ...prev, [key]: updatedPreviews }));
    setFormData((prev) => ({ ...prev, [key]: updatedFiles }));
  };

  const handleRemoveSingleImage = (key) => {
    setPreviews((prev) => ({ ...prev, [key]: null }));
    setFormData((prev) => ({ ...prev, [key]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 shadow rounded-md"
    >
      {fields.map((field) => (
        <div key={field.key}>
          <label className="block mb-1 text-sm font-medium">{field.label}</label>

          {field.type === 'textarea' ? (
            <textarea
              className="w-full border rounded p-2"
              value={formData[field.key] || ''}
              onChange={(e) => handleChange(field.key, e.target.value)}
              required={field.required}
            />
          ) : field.type === 'file' ? (
            <>
              <input
                type="file"
                className="w-full border rounded p-2"
                accept={field.accept}
                multiple={field.multiple}
                onChange={(e) =>
                  handleFileChange(field.key, e.target.files, field.multiple)
                }
                required={field.required && !formData[field.key]}
              />

              <div className="mt-2 flex gap-2 flex-wrap">
                {/* Multiple files */}
                {field.multiple &&
                  Array.isArray(previews[field.key]) &&
                  previews[field.key].map((item, i) => (
                    <div key={i} className="relative w-20 h-20">
                      <img
                        src={item.url}
                        alt={`preview-${i}`}
                        className="w-full h-full object-cover rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(field.key, i)}
                        className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                {/* Single file */}
                {!field.multiple && previews[field.key] && (
                  <div className="relative w-20 h-20">
                    <img
                      src={previews[field.key]}
                      alt="preview"
                      className="w-full h-full object-cover rounded border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSingleImage(field.key)}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <input
              type={field.type}
              className="w-full border rounded p-2"
              value={formData[field.key] || ''}
              onChange={(e) => handleChange(field.key, e.target.value)}
              required={field.required}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
