window._ = require('lodash');


import axios from '@/plugins/axios'

window.axios = axios;



import Echo from 'laravel-echo';

window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host:'localhost:6001'
});
