export const hasFileExtension = (path: string) => {
    if (!path) return false;
    const cleanPath = path.replace(/\/$/, '');
    return /\.[a-zA-Z0-9]+$/.test(cleanPath);
}