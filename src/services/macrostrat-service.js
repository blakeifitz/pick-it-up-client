const MacroService = {
  getAge() {
    return fetch(
      'https://macrostrat.org/api/v2/geologic_units/gmus?lat=39.479069&lng=-84.058713',
      {
        method: 'GET',
      }
    )
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((data) => {
        let macroInfo = {
          age: data.success.data[0].b_age,
          stratAge: data.success.data[0].containing_interval,
          rocktypes: data.success.data[0].rocktype,
        };
        return macroInfo;
      });
  },
};
export default MacroService;
