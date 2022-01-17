import * as _ from 'lodash';

class _BackendService {
    url = '';

    init(url) {
        this.url = url;
    }

    fetch(resource, options) {
        let usedOptions = {
            credentials: 'same-origin'
        };
        if (options) {
            usedOptions = _.assign(usedOptions, options);
        }
        return window.fetch(this.url + resource, usedOptions);
    }

    get(resource, params) {
        let query = this.buildQueryParams(params);
        return this.fetch(resource + query, {method: 'GET'}).then(this._processJSONResponse);
    }

    post(resource, params) {
        let query = this.buildQueryParams(params);
        return this.fetch(resource + query, {method: 'POST'});
    }

    buildQueryParams(params) {
        let query = '';
        if (params) {
            const esc = encodeURIComponent;
            let makeQueryParam = function(key, value) {
                return `${esc(key)}=${esc(value)}`;
            };

            if (_.includes(this.url, '?')) {
                query += '&';
            } else {
                query += '?';
            }

            query += _.chain((Object.keys(params)))
                .map(k => Array.isArray(params[k]) ?
                    params[k].map(entry => makeQueryParam(k, entry)) :
                    makeQueryParam(k, params[k]))
                .flatten()
                .join('&');
        }

        return query;
    }

    _processJSONResponse(response) {
        return response.text().then(text => {
            let json = {};
            try {
                json = JSON.parse(text);

                if (json === null) {
                    json = {};
                }
            } catch (e) {
                console.error(e);
                console.log(e)
            }

            json._statusCode = response.status;
            json._statusText = response.statusText;

            return response.ok ? json : Promise.reject(json);
        });
    }
}

const BackendService = new _BackendService();

export default BackendService;