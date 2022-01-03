function isValidUrl(_string) {
    let url_string; 
    try {
      url_string = new URL(_string);
    } catch (_) {
      return false;  
    }
    return url_string.protocol === "http:" || url_string.protocol === "https:" ;
  }