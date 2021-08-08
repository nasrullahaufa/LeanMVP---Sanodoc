
import QRCode from "qrcode";

export default function generateQR(url) {

  let qrLink;

  QRCode.toDataURL(url, function (err, url) {
    console.log(url)
    qrLink=url
  })
    console.log(qrLink)
  return qrLink;
}
