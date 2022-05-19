const https = require('https');

  https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  const https = require('https');

  let data = ''
    resp.on('data', (chunk) => {
      data+=chunk;
    });
    resp.on('end', () => {
      let jsonData = JSON.parse(data.toString());
      let actualData = jsonData.data;
      let arr = actualData.split(", ");
      let totalCount = 0;
      const fs = require('fs');
      for(let i = 0; i < arr.length; i++){
        let item = arr[i], k = arr[i-1];
        if(item.indexOf('age=') !== -1){
          let age = item.split('=');
	  let key = k.split('=');
	  if(parseInt(age[1]) == 32) {
	    //const fs = require('fs')
	    fs.appendFile('output.txt', key[1]+'\n', err => {
		if (err) return console.error(err);
	    })
            totalCount++;
          }
        }
      }
      const crypto = require('crypto');
      const fileBuffer = fs.readFileSync('output.txt');
      const hashSum = crypto.createHash('sha1');
      hashSum.update(fileBuffer);
      const hex = hashSum.digest('hex');
      console.log(hex);
      //console.log(totalCount);
    })
});
