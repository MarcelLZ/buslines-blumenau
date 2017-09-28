import app from './app';
import 'babel-polyfill';

app.listen(app.get('PORT'), () => console.log('Iniciado'));
