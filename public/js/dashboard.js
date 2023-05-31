  const createPostFormHandler = async (event) => {
    event.preventDefault();
    
        document.location.replace('/api/blog');
    };
  
    document
    .querySelector('.create')
    .addEventListener('create', createPostFormHandler);