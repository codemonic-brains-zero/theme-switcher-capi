// import { useEffect, useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/ThemeContextProvider'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  // const [themeMode, setThemeMode] = useState('light');

  // const lightTheme = () => {
  //   setThemeMode("light");
  // }
  // const darkTheme = () => {
  //   setThemeMode("dark");
  // }

  // useEffect(() => {
  //   document.querySelector('html').classList.remove('light', 'dark');
  //   document.querySelector('html').classList.add(themeMode);
  // }, [themeMode])


  return (
    <>
      <ThemeContextProvider>
        <h1 className='bg-slate-600 p-4 text-3xl'>Theme Switcher Context API</h1>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* ThemeBtn */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
