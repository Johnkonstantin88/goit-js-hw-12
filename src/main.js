import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getPictures } from './js/pixabay-api';
import { markup } from './js/render-functions';

export const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', onSubmit);
const loaderSpan = ' <span class="css-loader"></span>';
refs.loader.insertAdjacentHTML('beforeEnd', loaderSpan);
refs.loader.hidden = true;

let lightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function onSubmit(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  refs.loader.hidden = false;

  if (refs.form.elements.searchQuery.value.trim() === '') {
    onError('Sorry, but you must enter your search query. Please try again.');

    return;
  }

  getPictures()
    .then(response => {
      const { hits, totalHits } = response;

      if (hits.length < 1) {
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again.',
        });
      }

      refs.gallery.insertAdjacentHTML('beforeend', markup(hits));

      lightboxGallery.refresh();

      if (!(hits.length < 1)) {
        iziToast.success({
          title: 'Success',
          message: `We found ${totalHits} images for you.`,
        });
      }

      refs.loader.hidden = true;
      refs.form.reset();
    })
    .catch(onError);
}

function onError(err = `${err.name}: ${err.message}`) {
  refs.loader.hidden = true;
  refs.form.reset();
  iziToast.error({
    title: 'Error',
    message: `${err}`,
  });
}
