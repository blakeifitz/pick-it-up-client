const MacroService = {
  getAge() {
    return fetch(
      'https://macrostrat.org/api/v2/geologic_units/gmna?lat=39.479069&lng=-84.058713',
      {
        method: 'GET',
      }
    )
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
      .then((data) => {
        return data.success.data[0].t_interval;
      });
  },
};
export default MacroService;
