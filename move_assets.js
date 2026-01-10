const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'Sequence');
const targetDir = path.join(__dirname, 'public', 'sequence');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error('Could not list the directory.', err);
        process.exit(1);
    }

    // Filter and sort files to ensure correct order
    // Files are like frame_000_delay-0.06s.webp
    const imageFiles = files
        .filter(file => file.endsWith('.webp') && file.startsWith('frame_'))
        .sort((a, b) => {
            const numA = parseInt(a.split('_')[1]);
            const numB = parseInt(b.split('_')[1]);
            return numA - numB;
        });

    // We only need 75 frames (0 to 74) according to specs, but let's copy what's consistent
    // User asked for "sequence of 75 images".
    const limit = 75;

    imageFiles.forEach((file, index) => {
        if (index >= limit) return;

        const sourcePath = path.join(sourceDir, file);
        const targetFilename = `speaker_sequence_${index}_frame.webp`;
        const targetPath = path.join(targetDir, targetFilename);

        fs.copyFile(sourcePath, targetPath, (err) => {
            if (err) throw err;
            console.log(`${file} -> ${targetFilename}`);
        });
    });

    console.log(`Moved ${Math.min(imageFiles.length, limit)} files.`);
});
