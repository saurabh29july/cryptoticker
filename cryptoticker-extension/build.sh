
echo "Removing existing extension"
rm -rf ../cryptoticker-extension.zip

echo "Building extension"
zip -r -FS ../cryptoticker-extension.zip * --exclude *.git* --exclude *.DS_Store* --exclude build.sh

echo "Extension cryptoticker-extension.zip available now!"