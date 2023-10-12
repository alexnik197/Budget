'use strict';

let currentMoney = 0;
let newMoney;

// Buttons
const BtnInc = document.querySelector('#income');
const BtnExp = document.querySelector('#expense');
const BtnCheck = document.querySelector('#check-budget');

// Budget text
const TextBudget = document.querySelector('#text-budget');
const BudgetValue = document.querySelector('#num-budget');

// Inputs
const inputInc = document.querySelector('#input-inc');
const inputExp = document.querySelector('#input-exp');

BudgetValue.textContent = currentMoney;

BtnCheck.addEventListener('click', function () {
  TextBudget.textContent = `Your budget is`;
  document.querySelector('body').style.background =
    'linear-gradient(to top left, #746fd5, #28abb4)';
  BudgetValue.textContent = `${currentMoney}`;
});

BtnInc.addEventListener('click', function () {
  if (inputInc.value != '') {
    newMoney = parseFloat(inputInc.value);
    currentMoney += newMoney;
    TextBudget.textContent = `Your incoming is`;
    document.querySelector('body').style.background =
      'linear-gradient(to top left, #746fd5, #28abb4)';
    BudgetValue.textContent = newMoney;
    inputInc.value = '';
  } else {
    TextBudget.textContent = `Input is empty!`;
    document.querySelector('body').style.background = '#b60404';
    BudgetValue.textContent = ``;
    inputInc.value = '';
  }
  console.log(currentMoney);
});

BtnExp.addEventListener('click', function () {
  if (inputExp.value != '') {
    if (currentMoney >= inputExp.value) {
      newMoney = parseFloat(inputExp.value);
      currentMoney -= newMoney;
      document.querySelector('body').style.background =
        'linear-gradient(to top left, #746fd5, #28abb4)';
      TextBudget.textContent = `Your expense is`;
      BudgetValue.textContent = newMoney;
      inputExp.value = '';
    } else {
      TextBudget.textContent = `You can't buy this item!`;
      BudgetValue.textContent = ``;
      inputExp.value = '';
      document.querySelector('body').style.background = '#b60404';
    }
  } else {
    TextBudget.textContent = `Input is empty!`;
    document.querySelector('body').style.background = '#b60404';
    BudgetValue.textContent = ``;
    inputInc.value = '';
  }
});
