const qs = require('qs');
const crypto = require('crypto');

module.exports = {
    postRequest: (req, res) => {
        /**
         * @param {http} req This is an HTTP request from the Express middleware
         * @param {!string} apiKey  Account Security API key
         * @return {Boolean} True if verified
         */
        function verifyCallback(req, apiKey) {
            const url = req.protocol + '://' + req.get('host') + req.originalUrl;
            console.log(`URL" ${url}`);
            const method = req.method;
            console.log(`method" ${method}`);
            const params = req.body;	// needs `npm i body-parser` on Express 4
            console.log(`params" ${params}`);

            // Sort the params
            const sortedParams = Object.entries(params)
                .map(([key, value]) => {
                    if (typeof value === 'object') {
                        return Object.entries(value)
                            .map(([nestedKey, nestedValue]) => `${key}[${nestedKey}]=${encodeURIComponent(nestedValue)}`)
                            .join('&');
                    } else {
                        return `${key}=${encodeURIComponent(value)}`;
                    }
                })
                .sort()
                .join('&');

            // Read the nonce from the request
            const nonce = req.headers['x-authy-signature-nonce'];
            console.log(`Nonce Received ${nonce}`)

            // concatinate all together and separate by '|'
            const data = nonce + '|' + method + '|' + url + '|' + sortedParams;

            // compute the signature
            const computedSig = crypto
                .createHmac('sha256', apiKey)
                .update(data)
                .digest('base64');

            const sig = req.headers['x-authy-signature'];

            // compare the message signature with your calculated signature
            console.log("New verification");
            console.log(`Data ${data}`);
            console.log(`Generated Signature: ${computedSig}`);
            console.log(`Signature received: ${sig}`);
            res.send({
                Generated: computedSig,
                Received: sig
            });

            return console.log(sig === computedSig);
        }

        verifyCallback(req, "ALbddxUdv5B57domT87whNr4Mcsxwmob");

        /**
         * Sort by property only.
         *  Normal JS sort parses the entire string so a stringified array value like 'events=zzzz'
         *  would be moved after 'events=aaaa'.
         *
         *  For this approach, we split tokenize the string around the '=' value and only sort alphabetically
         *  by the property.
         *
         * @param {string} x
         * @param {string} y
         * @return {number}
         */
        function sortByPropertyOnly(x, y) {
            const xx = x.split('=')[0];
            const yy = y.split('=')[0];

            if (xx < yy) {
                return -1;
            }
            if (xx > yy) {
                return 1;
            }
            return 0;
        }
    }
};