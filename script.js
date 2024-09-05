const { exec } = require('child_process');

// Execute the 'id' command
exec('id', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${stderr}`);
        return;
    }
    
    // Print the output of the 'id' command
    console.log(`ID Command Output:\n${stdout}`);
});
