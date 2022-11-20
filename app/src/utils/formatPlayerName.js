export default function formatPlayerName(name){
    return name.split(' ').slice(0, 2).join(' ');
}