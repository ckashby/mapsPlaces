export class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    addressForm.addEventListener('submit', this.findAddressHandler);
    locateUserBtn.addEventListener('click', this.locateUserHandler);
  }

  locateUserHandler = () => {
    if (!navigator.geolocation) {
      alert(
        'Location feature is not available in your browser - please use a more modern browser or manually enter an address.'
      );
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        console.log('Please wait...');
        console.log(coordinates);
      },
      (error) => {
        alert(
          'Could not locate you unfortunately. Please enter an address manually!'
        );
      }
    );
  };

  findAddressHandler = (event) => {
    event.preventDefault();
    const address = document.getElementById('address').value;
    console.log(address);
  };
}

new PlaceFinder();
