document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.inputs-block');
    const API_URL = 'http://localhost:3000'

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const serializedData = {};

        formData.forEach(function(value, key) {
            serializedData[key] = value;
        });

        fetch(`${API_URL}/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serializedData)
        })
            .then(response => {
                if (response.ok) {
                    console.log('Письмо успешно отправлено!');
                } else {
                    console.error('Не удалось отправить письмо!');
                }
            })
            .catch(error => {
                console.error('Ошибка при отправке письма:', error);
            });
    });
});
