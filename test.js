const crypto = require('crypto');

const secretKey = 'ALbddxUdv5B57domT87whNr4Mcsxwmob';
const base64Hmac = 'WOUxZv/oO6uALw7plz7D938hBJvnMs35Bh+iG1lfGUE=';
const originalMessage = '1703026240|POST|http://backend-nosql-411k.onrender.com/api/v1/validation|approval_request%5Bapp_id%5D=622b947ce4ffc46fb2523fe3&approval_request%5Bexpiration_timestamp%5D=1703112630&approval_request%5Blogos%5D=&approval_request%5Btransaction%5D%5Bcreated_at_time%5D=1703026230&approval_request%5Btransaction%5D%5Bcustomer_uuid%5D=484518&approval_request%5Btransaction%5D%5Bdetails%5D=&approval_request%5Btransaction%5D%5Bdevice_details%5D=&approval_request%5Btransaction%5D%5Bdevice_geolocation%5D=&approval_request%5Btransaction%5D%5Bdevice_signing_time%5D=1703026240&approval_request%5Btransaction%5D%5Bencrypted%5D=false&approval_request%5Btransaction%5D%5Bflagged%5D=false&approval_request%5Btransaction%5D%5Bhidden_details%5D=&approval_request%5Btransaction%5D%5Bmessage%5D=Login%20requested%20for%20a%20CapTrade%20Bank%20account.&approval_request%5Btransaction%5D%5Breason%5D=&approval_request%5Btransaction%5D%5Brequester_details%5D=&approval_request%5Btransaction%5D%5Bstatus%5D=approved&approval_request%5Btransaction%5D%5Buuid%5D=ef50df90-80ee-013c-318b-12110928a349&authy_id=192095401&callback_action=approval_request_status&device%5Bcity%5D=Bogot%C3%A1&device%5Bcountry%5D=Colombia&device%5Benabled_unlock_methods%5D=none&device%5Bid%5D=874281090&device%5Bip%5D=191.111.16.159&device%5Blast_account_recovery_at%5D=&device%5Blast_sync_date%5D=1703026238&device%5Blast_unlock_date%5D=&device%5Blast_unlock_method_used%5D=none&device%5Bmultidevice_enabled%5D=true&device%5Bmultidevice_updated_at%5D=1660935261&device%5Bos_type%5D=desktop&device%5Bregion%5D=Bogota%20D.C.&device%5Bregistration_city%5D=Bogot%C3%A1&device%5Bregistration_country%5D=Colombia&device%5Bregistration_date%5D=1695840018&device%5Bregistration_device_id%5D=821052138&device%5Bregistration_ip%5D=191.111.23.97&device%5Bregistration_method%5D=push&device%5Bregistration_region%5D=Bogota%20D.C.&device_uuid=874281090&multidevice_enabled=true&multidevice_updated_at=1660935261&signature=P9TxN5htPuo%2FZVSI0OBkfRx71tAA6JnoIcK%2FZDXgpoGC1PKQzog%2B2dfzWD9ybLNWIz8xWQ9XBL4XTOicRFzB4pWcunkRMzetumsNS25Z3VuGsmgqzOQsHRSkynbTSe0cawZxfB6Qb6alZShgHO%2BmKgJ3PySEKiL0lP%2B1yONPE%2Fab3%2FWAtLVhMHLHk3VEdWE2ZFGIYU4QLhkhlxNqpuXm26VRyQXWiPaghRQMFxwWR7DlUEJ2xrcoDiztDLJQXqTiaEY8FhLfPZVt3C9e4MkenJRdgx%2BBt4c2xbN1af4Heddy2M3TZWIx2Ik%2FCZG6OvAcZMI9%2FbulQxCNGPSo9HAZ%2Fw%3D%3D&status=approved&uuid=ef50df90-80ee-013c-318b-12110928a349';

// Step 1: Decode Base64
const binaryHmac = Buffer.from(base64Hmac, 'base64');

// Step 2: Verify HMAC
const computedHmac = crypto.createHmac('sha256', secretKey)
  .update(originalMessage)
  .digest();

// Step 3: Compare HMACs
if (crypto.timingSafeEqual(binaryHmac, computedHmac)) {
  console.log("HMAC verification successful. Original message is likely valid.");
} else {
  console.log("HMAC verification failed. Original message may be tampered or invalid.");
}