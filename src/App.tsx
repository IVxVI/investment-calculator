import './App.css'
import CardElement from './components/CardElement/CardElement'
import FormField from './components/FormField/FormField'
import InvestTable from './components/InvestTable/InvestTable'
import Page from './components/Page/Page'
import { useDataContext } from './context/useDataContext'


function App() {
  const { data } = useDataContext();
    
  return (
    <Page>
      <CardElement 
        title='Calculate your Investments!'
        description=''
        footer='by I.Vyhinnyi'
      >
        <FormField />
        <InvestTable data={data}/>
      </CardElement>
    </Page>
  )
}

export default App
