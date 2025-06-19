// app/components/FormField.tsx
type FormFieldProps = {
  name: string;
  label: string;
  defaultValue?: string | number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, string[]>;
};

export function FormField({
  name,
  label,
  defaultValue,
  value,
  onChange,
  errors,
}: FormFieldProps) {
  console.log(errors, "asdas");
  return (
    <div className="space-y-2">
      <label htmlFor={name}>{label} *</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`w-full border px-3 py-2 rounded ${
          errors?.[name] ? "border-red-500" : "border-gray-300"
        }`}
      />

      {errors?.[name] && (
        <p className="text-sm text-red-500">{errors[name][0]}</p>
      )}
    </div>
  );
}
