import QRious from 'qrious'



export default function generateQR(url){

    var qr = new QRious({
        value: url
      });
      qr.size = 60
      qr.background = 'green';
      qr.padding = null
      
      qr.toDataURL();
      //=> "data:image/png;base64,iVBOR...AIpqDnseH86KAAAAAElFTkSuQmCC"
      qr.toDataURL('image/jpeg');
      //=> "data:image/jpeg;base64,/9j/...xqAqIqgKFAAAAAq3RRQAUUUUAf/Z"
      console.log(qr.toDataURL())
      return qr.toDataURL()
}
