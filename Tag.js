// tags.js
document.addEventListener('DOMContentLoaded', () => {
    // Get all dessert items
    const dessertItems = document.querySelectorAll('.dessert-item');
    
    // Create and append modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modal.appendChild(modalContent);
    
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.textContent = '×';
    modalContent.appendChild(closeButton);
    
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-title');
    modalContent.appendChild(modalTitle);
    
    const modalImage = document.createElement('img');
    modalImage.classList.add('modal-image');
    modalContent.appendChild(modalImage);
    
    const modalDescription = document.createElement('p');
    modalDescription.classList.add('modal-description');
    modalContent.appendChild(modalDescription);
    
    // Dessert details
    const dessertDetails = {
        'Chocolate Cake': {
            src: 'images (15).jpeg',
            description: 'A rich and moist chocolate cake made with high-quality cocoa and topped with a creamy chocolate frosting.'
        },
        'Strawberry Cheesecake': {
            src: 'images (16).jpeg',
            description: 'A creamy cheesecake with a graham cracker crust, topped with a layer of fresh strawberries and strawberry sauce.'
        },
        'Tiramisu': {
            src: 'images (17).jpeg',
            description: 'An Italian classic made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.'
        },
        'Macarons': {
            src: 'images (18).jpeg',
            description: 'Delicate French cookies with a crispy shell and a soft, chewy center, filled with a variety of flavored ganaches.'
        },
        'Strawberry Pie': {
            src: 'OIP (11).jpg',
            description: 'A delightful pie filled with sweet and juicy strawberries, encased in a flaky pie crust.'
        },
        'Chocolate mousse toasted almond mixed berry tart': {
            src: 'Chocolate-mousse-toasted-almond-mixed-berry-tart-e1613002300532.webp',
            description: 'A decadent tart featuring a rich chocolate mousse, topped with toasted almonds and mixed berries.'
        }
    };
    
    // Function to show modal with dessert details
    const showModal = (title) => {
        const details = dessertDetails[title];
        modalTitle.textContent = title;
        modalImage.src = details.src;
        modalDescription.textContent = details.description;
        modal.classList.add('show');
    };
    
    // Event listener for dessert items
    dessertItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('.dessert-title').textContent;
            showModal(title);
        });
    });
    
    // Event listener for closing the modal
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    // Close modal when clicking outside of the content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});
