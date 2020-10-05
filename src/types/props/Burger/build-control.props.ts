export type BuildControlProps = {
    label:string;
    added: () => void;
    remove: () => void;
    disabled:boolean;
}