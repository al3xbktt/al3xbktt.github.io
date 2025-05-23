import './Switch.css';


export interface ThemeState {
  theme: string;
}

export const loadTheme = (state: string): string | undefined => {
    try {
        const serializedState = localStorage.getItem(state);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState) as string;
    } catch (err) {
        return undefined;
    }
};

  const saveTheme = (state: string): string | undefined => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
        console.log('state', serializedState);
    } catch (err){
        return undefined;
    }
}

    function toggleMode() {
      const body = document.body;
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      saveTheme(newTheme);
    }

export const Switch = () => {
  return (
    <>
      <input onChange={toggleMode}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        defaultChecked={loadTheme('state') === 'light' ? true : false}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

