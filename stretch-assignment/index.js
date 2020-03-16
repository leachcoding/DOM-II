const block = document.querySelector('.block');
const blockRed = document.querySelector('.blockred');
const blockBlue = document.querySelector('.blockblue');
const blockGreen = document.querySelector('.blockgreen');
const blockPink = document.querySelector('.blockpink');
const blockGrey = document.querySelector('.blockgray');
let marginValue = 10;
let travel;

// On click, moves the block clicked to the top
blockRed.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockBlue.style.order += 1;
  blockGreen.style.order += 1;
  blockPink.style.order += 1;
  blockGrey.style.order += 1;
});

blockBlue.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockRed.style.order += 1;
  blockGreen.style.order += 1;
  blockPink.style.order += 1;
  blockGrey.style.order += 1;
});

blockGreen.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockRed.style.order += 1;
  blockBlue.style.order += 1;
  blockPink.style.order += 1;
  blockGrey.style.order += 1;
});

blockPink.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockBlue.style.order += 1;
  blockRed.style.order += 1;
  blockGreen.style.order += 1;
  blockGrey.style.order += 1;
});

blockGrey.addEventListener('click', (event) => {
  event.target.style.order = 1;
  blockBlue.style.order += 1;
  blockRed.style.order += 1;
  blockGreen.style.order += 1;
  blockPink.style.order += 1;
});

// On mousedown, moves the clicked block to the right
blockRed.addEventListener('mousedown', (event) => {
  travel = true;

  let blockMargin = 10;

  timerAdd();

  function timerAdd() {
    e = setTimeout(addMargin, 10);
  }

  function timerSubtract() {
    e = setTimeout(subMargin, 10);
  }

  function addMargin() {
    if (travel) {
      blockMargin++;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerAdd();
    } else {
      subMargin();
    }
  }

  function subMargin() {
    if (blockMargin > 10) {
      blockMargin--;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerSubtract();
    }
  }

});

blockRed.addEventListener('mouseup', (event) => {
  travel = false;
});

blockBlue.addEventListener('mousedown', (event) => {
  travel = true;

  let blockMargin = 10;

  timerAdd();

  function timerAdd() {
    e = setTimeout(addMargin, 10);
  }

  function timerSubtract() {
    e = setTimeout(subMargin, 10);
  }

  function addMargin() {
    if (travel) {
      blockMargin++;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerAdd();
    } else {
      subMargin();
    }
  }

  function subMargin() {
    if (blockMargin > 10) {
      blockMargin--;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerSubtract();
    }
  }

});

blockBlue.addEventListener('mouseup', (event) => {
  travel = false;
});

blockGreen.addEventListener('mousedown', (event) => {
  travel = true;

  let blockMargin = 10;

  timerAdd();

  function timerAdd() {
    e = setTimeout(addMargin, 10);
  }

  function timerSubtract() {
    e = setTimeout(subMargin, 10);
  }

  function addMargin() {
    if (travel) {
      blockMargin++;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerAdd();
    } else {
      subMargin();
    }
  }

  function subMargin() {
    if (blockMargin > 10) {
      blockMargin--;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerSubtract();
    }
  }

});

blockGreen.addEventListener('mouseup', (event) => {
  travel = false;
});

blockPink.addEventListener('mousedown', (event) => {
  travel = true;

  let blockMargin = 10;

  timerAdd();

  function timerAdd() {
    e = setTimeout(addMargin, 10);
  }

  function timerSubtract() {
    e = setTimeout(subMargin, 10);
  }

  function addMargin() {
    if (travel) {
      blockMargin++;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerAdd();
    } else {
      subMargin();
    }
  }

  function subMargin() {
    if (blockMargin > 10) {
      blockMargin--;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerSubtract();
    }
  }

});

blockPink.addEventListener('mouseup', (event) => {
  travel = false;
});

blockGrey.addEventListener('mousedown', (event) => {
  travel = true;

  let blockMargin = 10;

  timerAdd();

  function timerAdd() {
    e = setTimeout(addMargin, 10);
  }

  function timerSubtract() {
    e = setTimeout(subMargin, 10);
  }

  function addMargin() {
    if (travel) {
      blockMargin++;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerAdd();
    } else {
      subMargin();
    }
  }

  function subMargin() {
    if (blockMargin > 10) {
      blockMargin--;
      event.target.style.marginLeft = `${blockMargin}px`;
      timerSubtract();
    }
  }

});

blockGrey.addEventListener('mouseup', (event) => {
  travel = false;
});
