import SimpleRouter from './simple-router';

const router = new SimpleRouter();

router.get('/test', () => {
    console.log('Test works');
})

router.get('/return', () => {
    return {value : 'success'}
})

router.listen(3000, () => console.log('Server listening at port 3000') );