exports.name = '/info';
exports.index = async (req, ress, next) => {
const request = require('request');
var uid = req.query.uid
var tokenU = req.query.token
if(!uid) return ress.json({ error: 'thiếu dữ liệu uid'})
try {
const token = 'EAAAAUaZA8jlABO4v044jFrYsRwIXZBNHh1aJFPZAauyhQyLwRuu3SlCbiCAPmOgoRrcbqmzaszZBqfQRIeOU6sz0Iz1XkrHJr9OK1DuwhM9Kak4IWI9AZAZBCN226ZA3Dh0fg0zk9zyiZC50WsgpCQU5OFlWlggZBrcEzQAL6qJSrP1josM5LVZBZCErroBHmcJRZBoGgAZDZD'
const options = {
  method: 'POST',
  url: 'https://get-info-user-facebook.p.rapidapi.com/api-no-key/info',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'get-info-user-facebook.p.rapidapi.com',
    'x-rapidapi-key': 'a012e05802msh4ce48bff26d5c0ap151d85jsn4edde7f89de0',
    useQueryString: true
  },
  body: {id: uid, token: tokenU || token},
  json: true
};
request(options, function (error, response, body) {
	return ress.json({ data: body })
});
} catch(e) {
  return ress.json({ error: 'Token die, vui lòng đợi admin thay token hoặc bạn tự nhập token'})
}
}
