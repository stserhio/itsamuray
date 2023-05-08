import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";


let DialogComponent = () => <Dialogs/>
let ProfileComponent = () => <Profile/>

let MusicComponent = () => <Music/>

let NewsComponent = () => <News/>

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' render={ DialogComponent }/>
                        <Route path='/profile' render={ ProfileComponent }/>

                        <Route path='/music' element={MusicComponent}/>
                        <Route path='/news' element={NewsComponent}/>
                        <Route path='/settings' element={<Settings/>}/>


                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
