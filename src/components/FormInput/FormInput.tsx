import ErrorText from "../ErrorText/ErrorText";
import { Field, ErrorMessage } from 'formik';

type Props = {
  dataId: string,
  type: string,
  label: string,
  placeholder: string,
  handleChange: {
    (e: React.ChangeEvent<unknown>): void;
    <T = string | React.ChangeEvent<unknown>>(field: T): T extends React.ChangeEvent<unknown> ? void : (e: string | React.ChangeEvent<unknown>) => void;
  },

}

export default function FormInput({dataId, type, label, placeholder, handleChange}: Props) {
  return (
    <div key={dataId}>
      <label htmlFor={dataId} className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2.5">
        <Field
          onChange={handleChange}
          type={type}
          name={dataId}
          id={dataId}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
        <ErrorText>
          <ErrorMessage name={dataId} />
        </ErrorText>
      </div>
    </div>
  )
}
