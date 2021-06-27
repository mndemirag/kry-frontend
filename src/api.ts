import { Service } from "./types";

class ServiceClient {
  getServiceData = () => {
    return fetch("/service")
      .then((res) => res.json())
      .then((result: any[]) => {
        return result.map(
          ({ name, status }) =>
            ({
              name,
              status: JSON.parse(status),
            } as Service)
        );
      });
  };

  postServiceData = (name: string, url: string) => {
    return fetch("/service", {
      method: "POST",
      body: JSON.stringify({ name, url }),
    });
  };

  deleteServiceData = (name: string) => {
    return fetch("/service", {
      method: "DELETE",
      body: JSON.stringify({ name }),
    });
  };
}

export const api = new ServiceClient();
