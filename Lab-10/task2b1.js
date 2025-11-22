module.exports = function(message) {
    const time = new Date().toISOString();
    console.log(`[${time}] ${message}`);
};  