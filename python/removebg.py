from rembg import remove
from PIL import Image
import os
input_path = "Meshack.png"  # image to remove bg from
output_path = os.path.splitext(input_path)[0] + "_rm_bg.png"  # e.g., Meshack_rm_bg.png

input = Image.open(os.path.join(os.path.dirname(__file__), input_path))
output = remove(input)
output.save(output_path)