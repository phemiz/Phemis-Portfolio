import 'server-only';
import fs from 'fs/promises';
import path from 'path';
import { Project } from './data';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const ADMIN_FILE = path.join(DATA_DIR, 'admin.json');
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json');

export interface Settings {
    scrollingText: {
        section0: { heading: string; description: string };
        section30: { heading: string; description: string };
        section60: { heading: string; description: string };
        section90: { heading: string; description: string };
    };
    stackTechnology: string[];
}

export async function getProjects(): Promise<Project[]> {
    try {
        const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

export async function saveProjects(projects: Project[]) {
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
}

export async function getAdminCredentials() {
    try {
        const data = await fs.readFile(ADMIN_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return { username: 'admin', password: 'admin' };
    }
}

export async function updateAdminCredentials(creds: { username: string; password: string }) {
    await fs.writeFile(ADMIN_FILE, JSON.stringify(creds, null, 2));
}

export async function getSettings(): Promise<Settings> {
    try {
        const data = await fs.readFile(SETTINGS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        // Return default settings if file doesn't exist
        return {
            scrollingText: {
                section0: { heading: "Code Unbound.", description: "" },
                section30: { heading: "Modular System Architecture.", description: "Engineered for infinite scalability." },
                section60: { heading: "Precision Logic, Pure Intelligence.", description: "Every component calibrated for performance." },
                section90: { heading: "Experience the Future.", description: "" }
            },
            stackTechnology: [
                "React", "Next.js", "TypeScript", "Python", "FastAPI",
                "PostgreSQL", "OpenAI", "LangChain", "Framer Motion", "Tailwind CSS",
                "Node.js", "Docker", "AWS", "Firebase", "Git"
            ]
        };
    }
}

export async function updateSettings(settings: Settings) {
    await fs.writeFile(SETTINGS_FILE, JSON.stringify(settings, null, 2));
}
