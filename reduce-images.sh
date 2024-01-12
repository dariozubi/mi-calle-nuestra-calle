# This script needs imagemagick installed to work
function convert_to_jpg(){
    for j in $1
    do
        if test -f $j; then
            name=$(echo $j | cut -d '.' -f 1)
            fullName="$name.jpg"
            convert $j $fullName
            echo "Created $fullName..."
        fi
    done
    for j in $1
    do
        if test -f $j; then
            rm $j
            echo "Deleted $j..."
        fi
    done
}

# convert_to_jpg "$1/*.jpeg"

width=400
files=$1/*.jpg
for f in $files
do 
    if test -f $f; then
        size=$(stat -f%z $f)
        if [ $size -gt 200000 ]; then
            mogrify -filter Triangle -define filter:support=2 -thumbnail "$width" -unsharp 0.25x0.08+8.3+0.045 -dither None -posterize 136 -quality 82 -define jpeg:fancy-upsampling=off -interlace none -colorspace sRGB $f
            newsize=$(stat -f%z $f)
            echo "Reduced $f from $size to $newsize..."
        fi
    fi
done