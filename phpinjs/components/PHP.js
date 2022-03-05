export default function PHP(content) {
    const PHP = `
        <?php
            echo "${content}";
        ?>
    `

    return PHP
}