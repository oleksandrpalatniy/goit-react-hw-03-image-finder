function fetchImage(name, page) {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=23910272-237fb2deb4bad5ae314da2849&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (res.ok) {
      //  console.log('response ok')
      return res.json();
    }

    return Promise.reject(alert('sas'));
  });
}

const api = { fetchImage };
export default api;
