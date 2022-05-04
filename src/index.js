const fs = require("fs");
const request = require("request");

const clientId = "w0vgo7p66x";
const clientSecret = "4qTBqayERnNhiJsXTrgguP9A9618kewRCGJbX5Oh";

const samplePath = "sample/hello.wav";

// language => 언어 코드 ( Kor, Jpn, Eng, Chn )
function stt(language, filePath) {
  const url = `https://naveropenapi.apigw.ntruss.com/recog/v1/stt?lang=${language}`;
  const requestConfig = {
    url: url,
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "X-NCP-APIGW-API-KEY-ID": clientId,
      "X-NCP-APIGW-API-KEY": clientSecret,
    },
    body: fs.createReadStream(filePath),
  };

  const t1 = new Date();
  console.log(t1);
  request(requestConfig, (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(response.statusCode);
    console.log(body);
    const t2 = new Date();
    console.log(t2);
    console.log("time diff:", t2 - t1, "ms");
  });
}

stt("Kor", samplePath);
