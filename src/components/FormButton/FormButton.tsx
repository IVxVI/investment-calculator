import classNames from 'classnames'

type Props = {
  text: string,
  isSubmitting: boolean,
  isValid?: boolean,
  onClick: () => void,
}

export default function FormButton({text, isSubmitting, isValid, onClick}: Props) {
  
  return (
    <button
      onClick={onClick}
      type="submit"
      disabled={isSubmitting}
      className={classNames(
        "mt-4 mb-8 w-full rounded-md hover:bg-gray-600 px-6 py-3 font-medium text-white",
        {'bg-gray-600': isSubmitting || !isValid},
        {'bg-gray-900': isValid && !isSubmitting},
      )}>
      {isSubmitting ? 'Calculating...' : text}
    </button>
  )
}