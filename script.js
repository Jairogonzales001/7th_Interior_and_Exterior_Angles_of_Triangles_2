// State Management
let currentPhase = 1;
let totalPhases = 5;
let guidedExercisesDone = 0;
let independentScore = 0;
let independentAnswered = 0;

// Independent Practice Data
const independentProblems = [
    { question: 'Remote interior angles: 40° and 60°. Find exterior angle.', answer: 100 },
    { question: 'Remote interior angles: 55° and 75°. Find exterior angle.', answer: 130 },
    { question: 'Exterior: 140°, one remote interior: 65°. Find other.', answer: 75 },
    { question: 'Exterior: 115°, one remote interior: 50°. Find other.', answer: 65 },
    { question: 'Remote interior angles: 90° and 45°. Find exterior angle.', answer: 135 },
    { question: 'Remote interior: x and 2x. Exterior: 90°. Find x.', answer: 30 },
    { question: 'Remote interior: x and 3x. Exterior: 120°. Find x.', answer: 30 },
    { question: 'Exterior: 100°, one remote interior: 38°. Find other.', answer: 62 },
    { question: 'Remote interior angles: 72° and 58°. Find exterior angle.', answer: 130 },
    { question: 'Remote interior: x and (x+30). Exterior: 110°. Find x.', answer: 40 },
    { question: 'Remote interior angles: 35° and 85°. Find exterior angle.', answer: 120 },
    { question: 'Exterior: 125°, one remote interior: 70°. Find other.', answer: 55 },
    { question: 'Remote interior: x and 4x. Exterior: 100°. Find x.', answer: 20 },
    { question: 'Remote interior angles: 48° and 62°. Find exterior angle.', answer: 110 },
    { question: 'Exterior: 150°, one remote interior: 90°. Find other.', answer: 60 },
    { question: 'Remote interior: x and (x+10). Exterior: 90°. Find x.', answer: 40 },
    { question: 'Remote interior angles: 67° and 53°. Find exterior angle.', answer: 120 },
    { question: 'Exterior: 108°, one remote interior: 43°. Find other.', answer: 65 },
    { question: 'Remote interior: 2x and 3x. Exterior: 125°. Find x.', answer: 25 },
    { question: 'Remote interior: x and (x+40). Exterior: 120°. Find x.', answer: 40 }
];

let studentAnswers = {};

// Phase Navigation
function updateProgress() {
    const progress = ((currentPhase - 1) / (totalPhases - 1)) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = Math.round(progress) + '%';

    document.querySelectorAll('.phase-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index + 1 < currentPhase) {
            dot.classList.add('completed');
        } else if (index + 1 === currentPhase) {
            dot.classList.add('active');
        }
    });
}

function showPhase(phase) {
    document.querySelectorAll('.content-card').forEach(card => {
        card.classList.remove('active');
    });
    document.getElementById('phase' + phase).classList.add('active');
    currentPhase = phase;
    updateProgress();
}

function nextPhase() {
    if (currentPhase < totalPhases) {
        showPhase(currentPhase + 1);
    }
}

function prevPhase() {
    if (currentPhase > 1) {
        showPhase(currentPhase - 1);
    }
}

// Exercise 1: Finding an Exterior Angle (55° + 70° = 125°)
function checkStep1Ex1() {
    const angle1 = parseInt(document.getElementById('ex1-angle1').value);
    const angle2 = parseInt(document.getElementById('ex1-angle2').value);
    const result = document.getElementById('ex1-result1');

    // Check if both angles are correct (order doesn't matter)
    if ((angle1 === 55 && angle2 === 70) || (angle1 === 70 && angle2 === 55)) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex1-step1').classList.add('completed');
        document.getElementById('ex1-step2').classList.remove('hidden');
        document.getElementById('ex1-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! Look at the angles NOT next to x.';
    }
}

function checkStep2Ex1() {
    const input = document.getElementById('ex1-answer');
    const result = document.getElementById('ex1-result2');

    if (parseInt(input.value) === 125) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex1-step2').classList.remove('active');
        document.getElementById('ex1-step2').classList.add('completed');
        document.getElementById('ex1-step3').classList.remove('hidden');
        document.getElementById('ex1-step3').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! (55 + 70 = ?)';
    }
}

// Exercise 2: Finding Remote Interior Angle (130 - 45 = 85)
function checkStep1Ex2() {
    const input = document.getElementById('ex2-answer');
    const result = document.getElementById('ex2-result1');

    if (parseInt(input.value) === 85) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex2-step1').classList.add('completed');
        document.getElementById('ex2-step2').classList.remove('hidden');
        document.getElementById('ex2-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! (130 - 45 = ?)';
    }
}

// Exercise 3: Algebraic (x + 2x = 105, x = 35)
function checkStep1Ex3() {
    const input = document.getElementById('ex3-coef');
    const result = document.getElementById('ex3-result1');

    if (parseInt(input.value) === 3) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex3-step1').classList.add('completed');
        document.getElementById('ex3-step2').classList.remove('hidden');
        document.getElementById('ex3-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! (1x + 2x = ?x)';
    }
}

function checkStep2Ex3() {
    const input = document.getElementById('ex3-answer');
    const result = document.getElementById('ex3-result2');

    if (parseInt(input.value) === 35) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex3-step2').classList.remove('active');
        document.getElementById('ex3-step2').classList.add('completed');
        document.getElementById('ex3-step3').classList.remove('hidden');
        document.getElementById('ex3-step3').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! (105 ÷ 3 = ?)';
    }
}

// Exercise 4: Advanced Algebraic (50 + (x + 20) = 2x + 10, x = 60)
function checkStep1Ex4() {
    const input = document.getElementById('ex4-left');
    const result = document.getElementById('ex4-result1');

    if (parseInt(input.value) === 70) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex4-step1').classList.add('completed');
        document.getElementById('ex4-step2').classList.remove('hidden');
        document.getElementById('ex4-step2').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! (50 + 20 = ?)';
    }
}

function checkStep2Ex4() {
    const input = document.getElementById('ex4-answer');
    const result = document.getElementById('ex4-result2');

    if (parseInt(input.value) === 60) {
        result.className = 'result-badge correct';
        result.textContent = 'Correct!';
        document.getElementById('ex4-step2').classList.remove('active');
        document.getElementById('ex4-step2').classList.add('completed');
        document.getElementById('ex4-step3').classList.remove('hidden');
        document.getElementById('ex4-step3').classList.add('visible', 'active');
    } else {
        result.className = 'result-badge incorrect';
        result.textContent = 'Try again! (70 - 10 = ?)';
    }
}

// Complete Exercise
function completeExercise(exerciseNum) {
    guidedExercisesDone++;

    if (exerciseNum < 4) {
        document.getElementById('exercise' + exerciseNum).style.display = 'none';
        document.getElementById('exercise' + (exerciseNum + 1)).style.display = 'block';
    }

    if (guidedExercisesDone >= 4) {
        document.getElementById('phase3Next').disabled = false;
    }
}

// Independent Practice
function checkIndependent(problem) {
    const input = document.getElementById(`ind${problem}-input`);
    const resultEl = document.getElementById(`ind${problem}-result`);
    const submitBtn = input.parentElement.querySelector('.submit-btn');

    if (resultEl.textContent !== '') return;

    const userAnswer = parseFloat(input.value);
    const correctAnswer = independentProblems[problem - 1].answer;
    const isCorrect = userAnswer === correctAnswer;

    studentAnswers[problem] = {
        userAnswer: userAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        question: independentProblems[problem - 1].question
    };

    input.disabled = true;
    submitBtn.disabled = true;

    if (isCorrect) {
        resultEl.textContent = '✅';
        input.style.borderColor = '#10b981';
        input.style.backgroundColor = '#d1fae5';
        independentScore++;
    } else {
        resultEl.textContent = '❌';
        input.style.borderColor = '#ef4444';
        input.style.backgroundColor = '#fee2e2';
        // Show correct answer
        const correctSpan = document.createElement('span');
        correctSpan.style.color = '#10b981';
        correctSpan.style.marginLeft = '10px';
        correctSpan.style.fontWeight = '600';
        correctSpan.textContent = `(Answer: ${correctAnswer}°)`;
        resultEl.parentElement.appendChild(correctSpan);
    }

    independentAnswered++;
    document.getElementById('independentScore').textContent = independentScore;

    if (independentAnswered >= 20) {
        document.getElementById('finalScore').style.display = 'block';
        document.getElementById('finalScoreNumber').textContent = independentScore + '/20';
        document.getElementById('phase4Next').disabled = false;
        document.getElementById('finalIndScore').textContent = independentScore + '/20';
        document.getElementById('overallScore').textContent = (4 + independentScore) + '/24';
    }
}

// Print Results
function printResults() {
    const resultsContainer = document.getElementById('printIndependentResults');
    let resultsHTML = '';

    for (let i = 1; i <= 20; i++) {
        const problem = independentProblems[i - 1];
        const answer = studentAnswers[i];
        const isCorrect = answer ? answer.isCorrect : false;
        const userAns = answer ? answer.userAnswer : 'N/A';
        const correctAns = problem.answer;

        resultsHTML += `
            <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <span>${i}. ${problem.question}</span>
                <span>${userAns}° ${isCorrect ? '✓' : '✗ (Answer: ' + correctAns + '°)'}</span>
            </div>
        `;
    }

    resultsContainer.innerHTML = resultsHTML;

    const totalCorrect = 4 + independentScore;
    const percentage = Math.round((totalCorrect / 24) * 100);
    document.getElementById('printFinalScore').textContent = totalCorrect + '/24';
    document.getElementById('printPercentage').textContent = percentage + '%';

    document.body.classList.remove('printing-worksheet');
    window.print();
}

// Print Worksheet
function printWorksheet() {
    document.body.classList.add('printing-worksheet');
    window.print();
    setTimeout(() => {
        document.body.classList.remove('printing-worksheet');
    }, 100);
}

// Restart Lesson
function restartLesson() {
    currentPhase = 1;
    guidedExercisesDone = 0;
    independentScore = 0;
    independentAnswered = 0;
    studentAnswers = {};

    // Reset Exercise displays
    document.getElementById('exercise1').style.display = 'block';
    document.getElementById('exercise2').style.display = 'none';
    document.getElementById('exercise3').style.display = 'none';
    document.getElementById('exercise4').style.display = 'none';

    // Reset all steps for all exercises
    const exerciseSteps = {
        1: 3,
        2: 2,
        3: 3,
        4: 3
    };

    for (let ex = 1; ex <= 4; ex++) {
        for (let step = 1; step <= exerciseSteps[ex]; step++) {
            const stepEl = document.getElementById(`ex${ex}-step${step}`);
            if (stepEl) {
                stepEl.classList.remove('completed', 'visible', 'active', 'hidden');
                if (step === 1) {
                    stepEl.classList.add('visible', 'active');
                } else {
                    stepEl.classList.add('hidden');
                }
            }
        }
    }

    // Reset inputs
    const inputs = [
        'ex1-angle1', 'ex1-angle2', 'ex1-answer',
        'ex2-answer',
        'ex3-coef', 'ex3-answer',
        'ex4-left', 'ex4-answer'
    ];
    inputs.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    // Reset result badges
    const resultBadges = [
        'ex1-result1', 'ex1-result2',
        'ex2-result1',
        'ex3-result1', 'ex3-result2',
        'ex4-result1', 'ex4-result2'
    ];
    resultBadges.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.className = 'result-badge';
            el.textContent = '';
        }
    });

    // Reset independent practice
    for (let i = 1; i <= 20; i++) {
        const input = document.getElementById(`ind${i}-input`);
        const resultEl = document.getElementById(`ind${i}-result`);
        const submitBtn = input.parentElement.querySelector('.submit-btn');

        input.disabled = false;
        input.value = '';
        input.style.borderColor = '#e2e8f0';
        input.style.backgroundColor = '#fff';
        submitBtn.disabled = false;
        resultEl.textContent = '';

        // Remove any added "correct answer" spans
        const container = resultEl.parentElement;
        const addedSpans = container.querySelectorAll('span[style*="color: rgb(16, 185, 129)"]');
        addedSpans.forEach(span => span.remove());
    }

    document.getElementById('independentScore').textContent = '0';
    document.getElementById('finalScore').style.display = 'none';
    document.getElementById('phase3Next').disabled = true;
    document.getElementById('phase4Next').disabled = true;

    showPhase(1);
}

// Allow Enter key to submit in exercises
function setupEnterKeyListeners() {
    // Independent practice
    for (let i = 1; i <= 20; i++) {
        const input = document.getElementById(`ind${i}-input`);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkIndependent(i);
                }
            });
        }
    }

    // Guided practice inputs
    const guidedInputs = [
        { id: 'ex1-angle2', fn: checkStep1Ex1 },
        { id: 'ex1-answer', fn: checkStep2Ex1 },
        { id: 'ex2-answer', fn: checkStep1Ex2 },
        { id: 'ex3-coef', fn: checkStep1Ex3 },
        { id: 'ex3-answer', fn: checkStep2Ex3 },
        { id: 'ex4-left', fn: checkStep1Ex4 },
        { id: 'ex4-answer', fn: checkStep2Ex4 }
    ];

    guidedInputs.forEach(item => {
        const input = document.getElementById(item.id);
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    item.fn();
                }
            });
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    setupEnterKeyListeners();

    // Phase dot click navigation
    document.querySelectorAll('.phase-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const phase = parseInt(dot.dataset.phase);
            if (phase <= currentPhase || dot.classList.contains('completed')) {
                showPhase(phase);
            }
        });
    });
});
