export const ServiceButtonGroupe = ({ handleThemeSwitch }) => {
  return (
    <div>
      <button type="button" onClick={handleThemeSwitch}>
        Theme switch
      </button>
      <button>Language</button>
    </div>
  );
};
