export function getUsers() {
    const url = `https://app.crmetric.com/srv-crmetric-web/rest/usuario/listarUsuarioxnombre`;

    const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      };

    return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      return err;
    });
}