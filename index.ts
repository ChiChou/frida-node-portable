import frida from 'frida';

async function main() {
    const devices = await frida.enumerateDevices();
    console.log('Available devices:');
    devices.forEach(device => {
        console.log(`- ${device.name} (${device.id}) [${device.type}]`);
    });
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});