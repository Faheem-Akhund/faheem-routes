export default function auth({ next, router }) {
    if (!localStorage.getItem('login')) {
      return router.push({ name: 'Login' });
    }
  
    return next();
  }