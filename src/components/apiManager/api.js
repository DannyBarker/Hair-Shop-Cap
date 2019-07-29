const remoteURL = "http://localhost:5002";
export default {
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(data => data.json());
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(data => data.json());
  },
  getExpand(resource, expand) {
    return fetch(`${remoteURL}/${resource}?_expand=${expand}`).then(data => data.json());
  },
  post(resource, newData) {
    return fetch(`${remoteURL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    }).then(e => e.json());
  },
  put(resource, editData) {
    return fetch(`${remoteURL}/${resource}/${editData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editData)
    }).then(e => e.json());
  },
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: "DELETE"
    }).then(e => e.json());
  }
};
