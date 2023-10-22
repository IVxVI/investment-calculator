import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import { useDataContext } from '../../context/useDataContext';
import { Data } from '../../types/Data';

export default function FormField() {
  const { setData } = useDataContext();
  const initialValues = {
    currentSavings: '',
    yearlySavings: '',
    expectedInvest: '',
    investmentDuration: ''
  }

  const dataSchema = Yup.object().shape({
    currentSavings: Yup.number()
      .min(1, 'You are broke!')
      .max(999999, 'Too rich for calculating money!')
      .required('Required'),
    yearlySavings: Yup.number()
      .min(1, 'You are broke!')
      .max(999999, 'Too rich for calculating money!')
      .required('Required'),
    expectedInvest: Yup.number()
      .min(0, 'Think about enlarging your investments regularly!')
      .max(100, 'Percents are calculated in a range from 0 to 100!')
      .required('Required'),
    investmentDuration: Yup.number()
      .min(1, 'Profits can be earned at least after 1 year!')
      .max(50, 'Are you sure you will live for so long?')
      .required('Required')  
  });
  
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={dataSchema}
      onSubmit={ async (values) => {     
        let currentSavings = +values.currentSavings; 
        const yearlySavings = +values.yearlySavings;
        const expectedInvest = +values.expectedInvest / 100;
        const investmentDuration = +values.investmentDuration;

        await sleep(500);
        const investments: Data[] = [];
        const initialInvestment = currentSavings;

        for (let i = 0; i < investmentDuration; i++) {
          const year = i + 1;
          const yearlyInterest = currentSavings * expectedInvest;
          currentSavings += yearlyInterest + yearlySavings;
          
          const totalInterest = currentSavings - initialInvestment - (
            yearlySavings * year
          )
          const investedCapital = initialInvestment + yearlySavings * year

          investments.push({
            year: year,
            totalSaving: +currentSavings.toFixed(2),
            interest: +yearlyInterest.toFixed(2),
            totalInterest: +totalInterest.toFixed(2),
            investedCapital: +investedCapital.toFixed(2),
          });
        }

        console.log(investments);
        setData(investments);
      }}
    >
      {({ handleChange, isSubmitting, isValid, resetForm, submitForm }) => (
        <Form className="mx-auto mt-4 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormInput 
              dataId='currentSavings'
              type='number'
              placeholder='type your numbers here'
              label='CURRENT SAVINGS'
              handleChange={handleChange}
            />
            <FormInput 
              dataId='yearlySavings'
              type='number'
              placeholder='type your numbers here'
              label='YEARLY SAVINGS'
              handleChange={handleChange}
            />
            <FormInput 
              dataId='expectedInvest'
              type='number'
              placeholder='type your numbers here'
              label='EXPECTED INVEST (% per year)'
              handleChange={handleChange}
            />
            <FormInput 
              dataId='investmentDuration'
              type='number'
              placeholder='type your numbers here'
              label='INVESTMENT DURATION'
              handleChange={handleChange}
            />   
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormButton
              text="Calculate"
              isSubmitting={isSubmitting}
              isValid={isValid}
              onClick={() => submitForm()}
            />
            <FormButton
              text="RESET"
              isSubmitting={isSubmitting}
              isValid={isValid}
              onClick={() => resetForm()}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
