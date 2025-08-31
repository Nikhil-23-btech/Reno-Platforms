import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Addschools from './addSchools'
import Showschools from './showSchools'
import IITTirupati from './schools/IITtpt'
import MBU from './schools/MBU'
import SVCE from './schools/SVCE'
import SVU from './schools/SVU'
import Andhra from './schools/Andhra'
import StanfordUniversity from './schools/Stanford'
import VITVellore from './schools/VIT'
import SRMUniversity from './schools/SRM'

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            {/* Default route now shows list of schools */}
            <Route path='/' element={<Showschools />} />
            <Route path='/Navbar' element={<Navbar />} />
            <Route path='/Addschools' element={<Addschools />} />
            <Route path='/Showschools' element={<Showschools />} />
            <Route path="/iit-tirupati" element={<IITTirupati />} />
            <Route path="/mbu" element={<MBU />} />
            <Route path="/svce" element={<SVCE />} />
            <Route path="/svu" element={<SVU />} />
            <Route path="/andhra-university" element={<Andhra />} />
            <Route path="/stanford" element={<StanfordUniversity />} />
            <Route path="/vit" element={<VITVellore />} />
            <Route path="/srm" element={<SRMUniversity />} />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
