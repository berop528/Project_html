const container = document.querySelector('.form-groups');

function createInput(id) {
    const newInput = document.createElement('input');
    newInput.className = 'form-control text-left';
    newInput.type = 'text';
    newInput.placeholder = 'เพิ่มตัวเลือกในช่องนี้';
    newInput.id = `input-${id}`;
    return newInput;
}

container.addEventListener('input', function (event) {
    const targetInput = event.target;
    const targetId = parseInt(targetInput.id.split('-')[1]);

    if (targetInput.value.trim() !== '') {
        const nextInputId = targetId + 1;
        const nextInput = document.getElementById(`input-${nextInputId}`);

        if (!nextInput) {
            const newInput = createInput(nextInputId);
            container.appendChild(newInput);
        }
    } else {
        const currentInputId = targetId;
        const nextInputId = currentInputId + 1;
        const nextInput = document.getElementById(`input-${nextInputId}`);

        while (nextInput) {
            container.removeChild(nextInput);
            nextInput = document.getElementById(`input-${nextInputId}`);
        }
    }
});