const content = {
    en: {
        title: 'CTkDesigner',
        description: 'Elevate Your GUI Development',
        longDescription: 'CTkDesigner is a sophisticated graphical user interface (GUI) design tool crafted with Python and CustomTkinter. Experience seamless creation, customization, and export of GUI layouts, revolutionizing your CustomTkinter application development process.',
        features: {
            title: 'Premium Features',
            list: [
                { title: 'Intuitive Visual Builder', description: 'Sleek GUI builder for CustomTkinter' },
                { title: 'Effortless Drag & Drop', description: 'Precision widget placement' },
                { title: 'Real-time Editing', description: 'Instant property updates' },
                { title: 'Advanced Hierarchical View', description: 'Crystal-clear widget structure visualization' },
                { title: 'One-Click Code Export', description: 'Seamless Python code generation' },
                { title: 'Robust Project Management', description: 'Effortless import and export of projects' }
            ]
        },
        workflow: {
            title: 'Streamlined Workflow',
            steps: [
                'Configure window properties',
                'Add widgets to your canvas',
                'Fine-tune in real-time',
                'Organize widget hierarchy',
                'Preview generated code',
                'Export as Python script'
            ]
        },
        getStarted: {
            title: 'Get Started in Minutes',
            steps: [
                { text: 'Clone the repository:', code: 'git clone https://github.com/yourusername/CTkDesigner.git\ncd CTkDesigner' },
                { text: 'Install dependencies:', code: 'pip install -r requirements.txt' },
                { text: 'Launch CTkDesigner:', code: 'python main.py' }
            ]
        },
        usage: {
            title: 'Start Designing',
            steps: [
                'Launch CTkDesigner',
                'Create a new project',
                'Design your interface',
                'Customize widget properties',
                'Preview and test your design',
                'Export your project'
            ]
        }
    },
    es: {
        title: 'CTkDesigner',
        description: 'Eleva tu Desarrollo de GUI',
        longDescription: 'CTkDesigner es una sofisticada herramienta de diseño de interfaz gráfica de usuario (GUI) creada con Python y CustomTkinter. Experimenta una creación, personalización y exportación de diseños de GUI sin problemas, revolucionando tu proceso de desarrollo de aplicaciones CustomTkinter.',
        features: {
            title: 'Características Premium',
            list: [
                { title: 'Constructor Visual Intuitivo', description: 'Elegante constructor de GUI para CustomTkinter' },
                { title: 'Arrastrar y Soltar Sin Esfuerzo', description: 'Colocación precisa de widgets' },
                { title: 'Edición en Tiempo Real', description: 'Actualizaciones instantáneas de propiedades' },
                { title: 'Vista Jerárquica Avanzada', description: 'Visualización cristalina de la estructura de widgets' },
                { title: 'Exportación de Código con Un Clic', description: 'Generación fluida de código Python' },
                { title: 'Gestión Robusta de Proyectos', description: 'Importación y exportación sin esfuerzo de proyectos' }
            ]
        },
        workflow: {
            title: 'Flujo de Trabajo Optimizado',
            steps: [
                'Configura las propiedades de la ventana',
                'Agrega widgets a tu lienzo',
                'Ajusta en tiempo real',
                'Organiza la jerarquía de widgets',
                'Previsualiza el código generado',
                'Exporta como script Python'
            ]
        },
        getStarted: {
            title: 'Comienza en Minutos',
            steps: [
                { text: 'Clona el repositorio:', code: 'git clone https://github.com/yourusername/CTkDesigner.git\ncd CTkDesigner' },
                { text: 'Instala las dependencias:', code: 'pip install -r requirements.txt' },
                { text: 'Inicia CTkDesigner:', code: 'python main.py' }
            ]
        },
        usage: {
            title: 'Empieza a Diseñar',
            steps: [
                'Inicia CTkDesigner',
                'Crea un nuevo proyecto',
                'Diseña tu interfaz',
                'Personaliza las propiedades de los widgets',
                'Previsualiza y prueba tu diseño',
                'Exporta tu proyecto'
            ]
        }
    }
};

let currentLanguage = 'en';

function updateContent() {
    const currentContent = content[currentLanguage];

    document.getElementById('title').textContent = currentContent.title;
    document.getElementById('description').textContent = currentContent.description;
    document.getElementById('longDescription').textContent = currentContent.longDescription;
    document.getElementById('featuresTitle').textContent = currentContent.features.title;
    document.getElementById('workflowTitle').textContent = currentContent.workflow.title;
    document.getElementById('getStartedTitle').textContent = currentContent.getStarted.title;
    document.getElementById('usageTitle').textContent = currentContent.usage.title;

    const featuresList = document.getElementById('featuresList');
    featuresList.innerHTML = '';
    currentContent.features.list.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-gray-600';
        featureElement.innerHTML = `
            <h3 class="text-xl font-semibold mb-2 text-gray-100">${feature.title}</h3>
            <p class="text-gray-400">${feature.description}</p>
        `;
        featuresList.appendChild(featureElement);
    });

    const workflowSteps = document.getElementById('workflowSteps');
    workflowSteps.innerHTML = '';
    currentContent.workflow.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-center';
        stepElement.innerHTML = `
            <div class="flex-shrink-0 mr-4">
                <div class="w-10 h-10 bg-primary text-gray-100 rounded-full flex items-center justify-center font-bold text-lg">
                    ${index + 1}
                </div>
            </div>
            <p class="text-lg text-gray-300">${step}</p>
        `;
        workflowSteps.appendChild(stepElement);
    });

    const getStartedSteps = document.getElementById('getStartedSteps');
    getStartedSteps.innerHTML = '';
    currentContent.getStarted.steps.forEach(step => {
        const stepElement = document.createElement('div');
        stepElement.className = 'bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700';
        stepElement.innerHTML = `
            <p class="text-lg mb-2 text-gray-300">${step.text}</p>
            <pre class="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code class="text-sm text-gray-300">${step.code}</code>
            </pre>
        `;
        getStartedSteps.appendChild(stepElement);
    });

    const usageSteps = document.getElementById('usageSteps');
    usageSteps.innerHTML = '';
    currentContent.usage.steps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'flex items-center';
        stepElement.innerHTML = `
            <div class="flex-shrink-0 mr-4">
                <div class="w-10 h-10 bg-primary text-gray-100 rounded-full flex items-center justify-center font-bold text-lg">
                    ${index + 1}
                </div>
            </div>
            <p class="text-lg text-gray-300">${step}</p>
        `;
        usageSteps.appendChild(stepElement);
    });

    document.getElementById('langToggle').textContent = currentLanguage === 'en' ? 'Español' : 'English';
}

document.getElementById('langToggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    updateContent();
});

updateContent();

